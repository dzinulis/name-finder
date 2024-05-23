import { useQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'
import { NameInfo, fetchNames } from '../api/fetchNames'
import { NameList } from '../components/NameList'

export const Route = createFileRoute('/nameToday')({
  component: nameToday
})

function nameToday() {
  const { data, status } = useQuery({
    queryKey: ['names'],
    queryFn: fetchNames
  })

  function filterToday(nameInfo: NameInfo): boolean {
    var date = new Date();
    return nameInfo.month === (date.getMonth() + 1) && nameInfo.day === date.getDate();
  }
  
  return (
    <>
    <h3>Šodienas vārda dienas:</h3>
    {status === "success" ? (
          NameList(data.filter(filterToday), false)
        ) : (
          <h2> Loading... </h2>
        )
        }
    </>
  )
}