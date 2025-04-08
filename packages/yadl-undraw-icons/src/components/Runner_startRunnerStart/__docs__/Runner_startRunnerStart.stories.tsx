import type { Meta, StoryObj } from "@storybook/react";
import Runner_startRunnerStart from "../Runner_startRunnerStart";

const meta: Meta<typeof Runner_startRunnerStart> = { title: "unDraw/Runner_startRunnerStart", component: Runner_startRunnerStart };

export default meta;
type Story = StoryObj<typeof Runner_startRunnerStart>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
