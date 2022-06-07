import { memo, VFC, ReactNode } from "react";

import { Header } from "../organisms/layout/Header";

//  Router.tsxから受け取るchildrenはHomeコンポーネント、UserManagementコンポーネント、Settingコンポーネント、404Pageコンポーネントを受け取る
type Props = {
  children: ReactNode;
};

export const HeaderLayout: VFC<Props> = memo((props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
});
