import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { Community, communityState } from "../atoms/communitiesAtom";

const useCommunityData = () => {
  const [communityStateValue, setCommunityStateValue] =
    useRecoilState(communityState);

  const onJoinOrLeaveCommunity = (
    communityData: Community,
    isJoined: boolean
  ) => {
    //is user signed in
    // if not open auth modal

    if (isJoined) {
      leaveCommunity(communityData.id);
      return;
    }
    joinCommunity(communityData);
  };

  const joinCommunity = (communityData: Community) => {};
  const leaveCommunity = (communityId: string) => {};

  return {
    communityStateValue,
    onJoinOrLeaveCommunity,
    // joinCommunity,
    // leaveCommunity,
  };
};
export default useCommunityData;
