import { useRouter } from "next/router"
import * as s from "./onboarding1.styles"

export default function Onboarding1UI() {

    const router = useRouter()

    const onMoveToLogin = () => {
        router.push("/login")
    }

    const onMoveToOnboarding2 = () => {
        router.push("/onboarding2")
    }

    const onMoveToLanding = () => {
        router.push("/")
    }

    return(
        <s.WrapperDiv>
            <s.QuestionDiv>성별이 어떻게 되시나요?</s.QuestionDiv>
            <s.ButtonDiv>
                <s.ManButton>남성</s.ManButton>
                <s.ManButton>여성</s.ManButton>
            </s.ButtonDiv>

            <s.PrevNextDiv>
                <s.PrevButton onClick={onMoveToLanding}>{`<`}</s.PrevButton>
                <s.NextButton onClick={onMoveToOnboarding2}>{`>`}</s.NextButton>
            </s.PrevNextDiv>

            <s.AreYouUserDiv>
                <s.AlreadyUserDiv>이미 회원이신가요?</s.AlreadyUserDiv>
                <s.GoToLoginDiv onClick={onMoveToLogin}>로그인 하러가기</s.GoToLoginDiv>
            </s.AreYouUserDiv>
        </s.WrapperDiv>
    )
}