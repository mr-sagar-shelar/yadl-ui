import type { Meta, StoryObj } from "@storybook/react";
import SelectPlayer from "../SelectPlayer";

const meta: Meta<typeof SelectPlayer> = { title: "unDraw/SelectPlayer", component: SelectPlayer };

export default meta;
type Story = StoryObj<typeof SelectPlayer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
