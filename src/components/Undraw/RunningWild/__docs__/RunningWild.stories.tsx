import type { Meta, StoryObj } from "@storybook/react";
import RunningWild from "../RunningWild";

const meta: Meta<typeof RunningWild> = { title: "unDraw/RunningWild", component: RunningWild };

export default meta;
type Story = StoryObj<typeof RunningWild>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
