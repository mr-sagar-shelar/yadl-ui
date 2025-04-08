import type { Meta, StoryObj } from "@storybook/react";
import OnlineVideo from "../OnlineVideo";

const meta: Meta<typeof OnlineVideo> = { title: "unDraw/OnlineVideo", component: OnlineVideo };

export default meta;
type Story = StoryObj<typeof OnlineVideo>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
