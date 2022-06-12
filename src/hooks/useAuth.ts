import axios from "axios";
import { useCallback, useState } from "react";
import { useHistory } from "react-router-dom";

import { User } from "../types/api/User";
import { useMessage } from "./useMessage";
import { useLoginUser } from "./useLoginUser";

// finallly()を使う場合は、tsconfigの中のesのバージョンをes2018などに変更すること
export const useAuth = () => {
  const history = useHistory();
  const { showMessage } = useMessage();
  const { setLoginUser } = useLoginUser();
  const [loading, setLoading] = useState(false);

  const login = useCallback(
    (id: string) => {
      setLoading(true);
      axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => {
          if (res.data) {
            const isAdmin = res.data.id === 10 ? true : false;
            showMessage({ title: "ログインしました", status: "success" });
            setLoginUser({ ...res.data, isAdmin });
            history.push("/home");
          } else {
            showMessage({
              title: "ユーザーが見つかりませんでした",
              status: "error"
            });
            setLoading(false);
          }
        })
        .catch(() => {
          showMessage({ title: "ログインできません", status: "error" });
          setLoading(false);
        });
    },
    [history, showMessage, setLoginUser]
  );

  return { login, loading };
};
