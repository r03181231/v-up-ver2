export type readCommuDetail = {
  boardId: string
  boardTitle: string
  content: string
  date: string
  musicId: string
  likeList: string[] | null
  userId: string
  userInfo?: {
    nickname: string
    userImage: string | null
    userId: string
  }
  comment: {
    commentId: string
    boardId: string
  }[]
  musicInfo: {
    musicId: string
    musicTitle: string
    artist: string
    thumbnail: string
    runTime: string
    musicSource: string
    release: string
    lyrics: string
  }
}

export type UserInfo = {
  nickname?: string
  userImage?: string | null
  userId?: string
}

export type CommentType = {
  commentId?: string
}

export type MusicInfoType = {
  musicId?: string
  musicTitle?: string
  artist?: string
  thumbnail?: string
}
export type readCommuDetailDataType = {
  boardId?: string
  boardTitle?: string
  content?: string
  date?: string
  musicId?: string
  likeList: string[] | null
  userId?: string
  userInfo?: UserInfo
  comment?: CommentType
  musicInfo?: MusicInfoType
}

export type addCommnity = {
  boardTitle?: string
  content: string
  musicId: string
  userId: string
}

export type updateCommuity = {
  boardId: string
  boardTitle: string
  content: string
}

export type getLikeListCommunity = {
  boardId: string
  boardTitle: string
  content: string
  date: string
  likeList: string[] | null
  musicId: string
  userId: string
}

export type Props = {
  boardId: string
}

export type AddMusicInfoType = {
  artist: string
  musicId: string
  musicSource: string
  musicTitle: string
  release: string
  thumbnail: string
  runTime: string
  lyrics: string
}

export type AddMusicProps = {
  thumbnail: string | undefined
  musicTitle: string | undefined
  artist: string | undefined
  item: AddMusicInfoType
}
