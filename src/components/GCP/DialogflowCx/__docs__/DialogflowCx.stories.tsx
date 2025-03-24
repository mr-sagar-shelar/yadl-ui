import type { Meta, StoryObj } from "@storybook/react";
import DialogflowCx from "../DialogflowCx";

const meta: Meta<typeof DialogflowCx> = { title: "GCP/DialogflowCx", component: DialogflowCx };

export default meta;
type Story = StoryObj<typeof DialogflowCx>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
