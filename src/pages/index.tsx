import test1 from "~/styles/test.module.scss";
import test2 from "~/styles/test2.module.scss";

export default function Home() {
  return (
    <div>
      <h1 className={test1.pageTitle}>test-hcm-with-nextjs</h1>
      <div className={test1.box}>
        <h2 className={test1.headline}>Hello World</h2>
      </div>
      <div className={test2.box}>
        <h2 className={test2.headline}>Hello World</h2>
      </div>
    </div>
  )
}
