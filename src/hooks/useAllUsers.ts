/* eslint-disabled react-hooks/exhaustive-deps */
import { useCallback, useState } from "react";
import axios from "axios";

import { User } from "../types/api/User";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
  const { showMessage } = useMessage();
  const [loading, setLoading] = useState<boolean>(false);
  const [users, setUsers] = useState<Array<User>>([]);

  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch(() => {
        showMessage({
          title: "ユーザーの取得に失敗しました。",
          status: "error"
        });
      })
      .finally(() => {
        setLoading(false);
      });
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return { getUsers, loading, users };
};
