const { useEffect, useState } = require("react");

const useOnlineStatus = () => {
  const [onlineStatus, setOnlineStatus] = useState(true);
  // check whether you are in Online or Offline.
  useEffect(() => {
    (window.addEventListener("offline", () => {
      setOnlineStatus(false);
    }),
      window.addEventListener("online", () => {
        setOnlineStatus(true);
      }));
  }, []);

  return onlineStatus;
};

export default useOnlineStatus;
