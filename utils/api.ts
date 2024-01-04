const createURL = (path) => window.location.origin + path

export const createNewEntry = async () => {
  const res = await fetch(
    new Request(createURL('/api/journal'), {
      method: 'POST',
      // body: JSON.stringify({}),
    })
  )
  if (res.ok) {
    const data = await res.json()
    return data.data
  }
}
