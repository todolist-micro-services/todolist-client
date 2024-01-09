import { useWrapperContext } from "./wrapper";
import { UseCases, ViewModels } from "./types";
import { Register } from "@scenes/register";

function Wrapper() {
  const { view, pushView } = useWrapperContext();

  const close = () => {
    pushView({ useCase: UseCases.None, data: null });
  };

  const modals = {
    [UseCases.Register]: (data: ViewModels[UseCases.Register]) => (
      <Register {...data} close={close} />
    ),
  };

  return (
    <div>
      {view.useCase !== UseCases.None && (
        <div>{modals[view.useCase](view.data)}</div>
      )}
    </div>
  );
}

export { Wrapper };
