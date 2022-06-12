import { useCallback, useState } from "react";

import { User } from "../types/api/User";

type Props = {
  id: number;
  users: Array<User>;
};

export const useSelectUser = () => {
  // selectUserの値は配列型<User>かnullの型のみ認める。undefinedは認めていない
  // selectUserがユーザー情報を何も取得できなかった場合(普通はあり得ないが)はundefinedを返す恐れがある。型の不一致
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const onSelectUser = useCallback((props: Props) => {
    const { id, users } = props;
    const targetUser = users.find((user) => user.id === id);

    // targetUserの返り値の型は「undefinedか配列型<User>」が返却される。元の型定義<User | null >(null)と反する
    if (targetUser === undefined) {
      setSelectedUser(null);
    } else {
      setSelectedUser(targetUser);
    }
    // targetUserの値がundefinedの場合はnullを返す。
    // setSelectedUser(targetUser ?? null);
  }, []);
  return { onSelectUser, selectedUser };
};
