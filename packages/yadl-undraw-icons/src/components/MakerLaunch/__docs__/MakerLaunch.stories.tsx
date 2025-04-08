import type { Meta, StoryObj } from "@storybook/react";
import MakerLaunch from "../MakerLaunch";

const meta: Meta<typeof MakerLaunch> = { title: "unDraw/MakerLaunch", component: MakerLaunch };

export default meta;
type Story = StoryObj<typeof MakerLaunch>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
