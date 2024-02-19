import { TextInput } from "hello-design-system";

export default function TextInputPage() {
  return (
    <section className="flex flex-col gap-6 justify-center align-middle">
      <h1 className="font-semibold text-lg md:text-xl">Text Input</h1>
      <TextInput />
      <TextInput placeholder="내용을 입력해주세요." />
      <TextInput label="제목" placeholder="내용을 입력해주세요." />
      <TextInput
        label="비밀번호 입력"
        placeholder="비밀번호를 입력해주세요."
        message="비밀번호는 영문, 숫자를 포함하여 8자리 이상 입력해주세요."
      />
      <TextInput
        label="텍스트 입력"
        placeholder="텍스트를 입력해주세요."
        message="잘못된 텍스트를 입력하였습니다."
        type="error"
      />
      <TextInput
        label="비밀번호 입력"
        placeholder="비밀번호를 입력해주세요."
        message="비밀번호를 성공적으로 입력하였습니다."
        type="success"
      />
    </section>
  );
}
