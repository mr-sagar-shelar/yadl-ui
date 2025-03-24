import type { Meta, StoryObj } from "@storybook/react";
import SyncFiles from "../SyncFiles";

const meta: Meta<typeof SyncFiles> = { title: "unDraw/SyncFiles", component: SyncFiles };

export default meta;
type Story = StoryObj<typeof SyncFiles>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
