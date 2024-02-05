import { AboutInfo } from "../about/AboutInfo"
import { LayoutColumn } from "../layout/LayoutColumn"
import Hero from "./Hero"

export const Welcome = () => {
  return (
    <>
      <Hero />
      <LayoutColumn>
        <AboutInfo />
      </LayoutColumn>
    </>
  )
}
