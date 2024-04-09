'use client'
import SearchedCommunityData from '@/components/search/SearchedCommunityData'
import SearchedMusicData from '@/components/search/SearchedMusicData'
import {
  getSearchedCommunityData,
  getSearchedMusicData,
} from '@/shared/search/api'
import { useSearchedStore } from '@/shared/store/searchStore'
import { CommunityType } from '@/types/types'
import { useQuery } from '@tanstack/react-query'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

const Search = () => {
  const { searchedKeyword } = useSearchedStore()
  const { keyword, selectedTabs } = searchedKeyword
  const router = useRouter()

  const { data: musicResult } = useQuery({
    queryFn: () => getSearchedMusicData(keyword, selectedTabs),
    queryKey: ['getSearchedMusicData', keyword, selectedTabs],
  })

  const { data: communityResult } = useQuery({
    queryFn: () => getSearchedCommunityData(keyword, selectedTabs),
    queryKey: ['getSearchedCommunityData', keyword, selectedTabs],
  })

  const filteredData = communityResult?.filter((item) => {
    return item && item.userInfo && item.musicInfo
  }) as CommunityType[]

  useEffect(() => {
    if (
      (filteredData && filteredData.length === 0) ||
      (musicResult && musicResult.length === 0)
    ) {
      alert('검색 결과가 없습니다')
      router.push('/')
    }
  }, [filteredData, musicResult])

  return (
    <div>
      <div>
        {selectedTabs === 'musicInfo' && musicResult && (
          <div>
            {musicResult.map((item) => (
              <SearchedMusicData key={item.musicId} item={item} />
            ))}
          </div>
        )}
        {selectedTabs !== 'musicInfo' && communityResult && (
          <div>
            {filteredData.map((item) => (
              <SearchedCommunityData key={item.boardId} item={item} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Search

//   체인지 함수 만들것
//   채인지 함수 이벤트 인자로 키워드 가져오고 스토어에 저장
// 그러면 스토어에 키워드가 저장되고, 그걸 활용 할 수 있게 된다 그럼 초기화는 어디서 시켜야하나
// 리스트에서 검색결과가 나오면 초기화 그럼 페이지에서 초기화시켜야한다는것.
// 초기화함수를 스토어에 만들어서 페이지가 마운트 되면(검색결과가 나오면 유즈이펙사용), 검색 결과 초기화
