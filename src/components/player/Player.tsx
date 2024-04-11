import { PlayerProps } from '@/types/musicPlayer/types'
import Image from 'next/image'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

const Player = ({
  currentPlayList,
  musicIndex,
  onPreviousHandler,
  onNextTrackHandler,
}: PlayerProps) => {
  return (
    <div>
      <div>
        <div>{currentPlayList[musicIndex].musicTitle}</div>
        <div>{currentPlayList[musicIndex].artist}</div>
        <Image
          src={currentPlayList[musicIndex].thumbnail}
          alt='Album Thumbnail'
          width={100}
          height={100}
        />
        <div>{currentPlayList[musicIndex].lyrics}</div>
      </div>
      <AudioPlayer
        loop={false}
        // 볼륨 나중에 0.5로 변경할것!, 테스트중으로 자동 재생설정함
        volume={0.1}
        showSkipControls={true}
        onClickPrevious={onPreviousHandler}
        onClickNext={onNextTrackHandler}
        src={currentPlayList[musicIndex].musicSource}
        onEnded={onNextTrackHandler}
      />
    </div>
  )
}

export default Player
