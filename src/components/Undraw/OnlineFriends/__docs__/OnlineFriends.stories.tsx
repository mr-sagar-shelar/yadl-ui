import type { Meta, StoryObj } from "@storybook/react";
import OnlineFriends from "../OnlineFriends";

const meta: Meta<typeof OnlineFriends> = { title: "unDraw/OnlineFriends", component: OnlineFriends };

export default meta;
type Story = StoryObj<typeof OnlineFriends>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
