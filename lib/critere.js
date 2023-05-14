import { TzKT, tokensGetTokenBalances, operationsGetTransactions, tokensGetTokenTransfers } from '@tzkt/api'

export async function getAccountInfo(adress) {
  const tzkt = new TzKT('https://api.tzkt.io/v1')
  try {
    const account = await tzkt.accounts.get(adress)
    return ({
      balance: account.balance,
      firstActivityTime: account.firstActivityTime,
      tokenTransfersCount: account.tokenTransfersCount
    })
  } catch (error) {
    console.error('Erreur lors de la récupération des informations du compte:', error)
  }
}

export async function getAccountReportCSV(adress) {
  try {
    const response = await fetch(`https://api.tzkt.io/v1/accounts/${adress}/report`)
    const csvData = await response.text()
    return csvData
  } catch (error) {
    console.error('Erreur lors de la récupération du fichier CSV:', error);
  }
}

export async function getTokenBalances(adress, minBalance, symbol, limit) {
  const r = await tokensGetTokenBalances({
    account: {
      eq: adress
    },
    balance: {
      ne: `${minBalance}`
    },
    tokenMetadata: {
      eq: {
        jsonPath: 'symbol',
        jsonValue: symbol
      }
    },
    limit
  })
}

export async function getTransactions(target, entrypoints = ['mint', 'transfer', 'burn']) {
  const r = await operationsGetTransactions({
    target: {
      eq: target
    },
    entrypoint: {
      in: entrypoints
    },
  })
}

export async function getTokenTransfers(tokenId, sort, limit) {
  const r = await tokensGetTokenTransfers({
    tokenId: {
      eq: tokenId
    },
    from: {
      null: true
    },
    sort: {
      desc: sort
    },
    limit
  })
}
