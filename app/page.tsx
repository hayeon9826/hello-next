import { Button, ButtonType } from "hello-design-system";

export default function MainPage() {
  return (
    <>
      <div className="min-h-screen py-20 flex flex-col justify-center text-center max-w-2xl mx-auto px-4">
        <h1 className="text-lg font-semibold">Hello Design System</h1>
        <section className="flex flex-col gap-4 mt-8 justify-center align-middle">
          <div>
            <Button label="Primary true" primary={true} />
          </div>
          <div>
            <Button type={ButtonType.BLACK_LARGE} label="BLACK_LARGE" />
          </div>
          <div>
            <Button
              type={ButtonType.BLACK_LARGE_OUTLINE}
              label="BLACK_LARGE_OUTLINE"
            />
          </div>
          <div>
            <Button
              type={ButtonType.BLACK_SMALL_ROUNDED}
              label="BLACK_SMALL_ROUNDED"
            />
          </div>
          <div>
            <Button type={ButtonType.GRAY_LARGE} label="GRAY_LARGE" />
          </div>
          <div>
            <Button type={ButtonType.PRIMARY_LARGE} label="PRIMARY_LARGE" />
          </div>
          <div>
            <Button
              type={ButtonType.PRIMARY_LARGE_OUTLINE}
              label="PRIMARY_LARGE_OUTLINE"
            />
          </div>
          <div>
            <Button
              type={ButtonType.PRIMARY_LARGE_ROUNDED}
              label="PRIMARY_LARGE_ROUNDED"
            />
          </div>
          <div>
            <Button type={ButtonType.PRIMARY_SMALL} label="PRIMARY_SMALL" />
          </div>
          <div>
            <Button
              type={ButtonType.PRIMARY_SMALL_OUTLINE}
              label="PRIMARY_SMALL_OUTLINE"
            />
          </div>
          <div>
            <Button
              type={ButtonType.PRIMARY_SMALL_ROUNDED}
              label="PRIMARY_SMALL_ROUNDED"
            />
          </div>
        </section>
      </div>
    </>
  );
}
