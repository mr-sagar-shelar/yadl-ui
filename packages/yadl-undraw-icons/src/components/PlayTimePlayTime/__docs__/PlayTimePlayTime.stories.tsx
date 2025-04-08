import type { Meta, StoryObj } from "@storybook/react";
import PlayTimePlayTime from "../PlayTimePlayTime";

const meta: Meta<typeof PlayTimePlayTime> = { title: "unDraw/PlayTimePlayTime", component: PlayTimePlayTime };

export default meta;
type Story = StoryObj<typeof PlayTimePlayTime>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
