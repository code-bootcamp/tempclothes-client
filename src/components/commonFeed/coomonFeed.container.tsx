import { gql, useMutation, useQuery } from "@apollo/client";
import * as feed from "./commonFeed.styles";
import { useRouter } from "next/router";
import { useState } from "react";
// import Modal from "../common/commonModal";
import FeedDetail from "../feeds/detail/feedDetail.container";
import Link from "next/link";
import Modal from "../common/commonModal";
import { useRecoilState } from "recoil";
import { aaa } from "../common/store";

const M_TOGGLE_LIKE_FEED = gql`
  mutation toggleLikeFeed($feedId: String!) {
    toggleLikeFeed(feedId: $feedId)
  }
`;

const OotdFeed = (props) => {
  const router = useRouter();

  const [toggleLikeFeed] = useMutation(M_TOGGLE_LIKE_FEED);
  const [isLike, setIsLike] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    console.log("열려라");
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const onClickLike = (e) => {
    try {
      toggleLikeFeed({
        variables: {
          feedId: String(e.currentTarget.id),
        },
      });
      setIsLike(!isLike);
    } catch (error) {
      alert(error.message);
    }
  };

  const onClickMoveToDetail = (e) => {
    router.push(`/feeds/${e.currentTarget.id}`);
  };

  return (
    // <FeedWrapper__Div>
    <>
      <feed.FeedTop__Div>
        <feed.UserIcon__Div></feed.UserIcon__Div>
        <feed.UserName__Span>{props.el.user.nickname}</feed.UserName__Span>
      </feed.FeedTop__Div>

      {/* /feeds/[feedId]?feedId=${props.el.id} */}
      <feed.FeedBody__Div>
        {/* <Link href={`/?feedId=${props.el.id}`} as={`/go/${props.el.id}`}> */}
        <feed.FeedImageBox__Div id={props.el.id} onClick={openModal}>
          <feed.FeedImage__Img src={`https://storage.googleapis.com/${props.el.feedImg[0]?.imgURL}` ? `https://storage.googleapis.com/${props.el.feedImg[0]?.imgURL}` : ""} />
        </feed.FeedImageBox__Div>
        {/* </Link> */}

        <feed.HoverIcon__Div>
          {isLike ? <feed.LikeHeart id={props.el.id} onClick={onClickLike} /> : <feed.UnLikeHeart id={props.el.id} onClick={onClickLike} />}
          {/* {toggleLikeFeed ? <LikeHeart /> : <UnLikeHeart />} */}
          <feed.Dm />
        </feed.HoverIcon__Div>
      </feed.FeedBody__Div>

      <feed.FeedBottom__Div>
        <feed.BottomTop__Div>
          <feed.SelectedTag__Span>#{props.myRegion}</feed.SelectedTag__Span>
          {props.el.feedTag.map((el, idx) => (
            <feed.SelectedTag__Span key={idx}>#{el.tagName}</feed.SelectedTag__Span>
          ))}
        </feed.BottomTop__Div>

        <feed.BottomBottom__Div>
          {props.el.outer ? (
            <feed.ClothInfo__Div>
              <feed.ClothIcon__Div></feed.ClothIcon__Div>
              <feed.ClothName__Span>{props.el?.outer}</feed.ClothName__Span>
            </feed.ClothInfo__Div>
          ) : (
            ""
          )}

          {props.el.top ? (
            <feed.ClothInfo__Div>
              <feed.ClothIcon__Div></feed.ClothIcon__Div>
              <feed.ClothName__Span>{props.el?.top}</feed.ClothName__Span>
            </feed.ClothInfo__Div>
          ) : (
            ""
          )}

          {props.el.bottom ? (
            <feed.ClothInfo__Div>
              <feed.ClothIcon__Div></feed.ClothIcon__Div>
              <feed.ClothName__Span>{props.el?.bottom}</feed.ClothName__Span>
            </feed.ClothInfo__Div>
          ) : (
            ""
          )}

          {props.el.etc ? (
            <feed.ClothInfo__Div>
              <feed.ClothIcon__Div></feed.ClothIcon__Div>
              <feed.ClothName__Span>{props.el?.etc}</feed.ClothName__Span>
            </feed.ClothInfo__Div>
          ) : (
            ""
          )}
        </feed.BottomBottom__Div>
      </feed.FeedBottom__Div>

      <Modal open={modalOpen} close={closeModal} header="피드 디테일">
        <FeedDetail ootdFeedId={props.el.id} />
      </Modal>
    </>
    // </FeedWrapper__Div>
  );
};

export default OotdFeed;