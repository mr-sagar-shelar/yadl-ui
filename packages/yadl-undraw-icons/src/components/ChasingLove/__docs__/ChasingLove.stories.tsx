import type { Meta, StoryObj } from "@storybook/react";
import ChasingLove from "../ChasingLove";

const meta: Meta<typeof ChasingLove> = { title: "unDraw/ChasingLove", component: ChasingLove };

export default meta;
type Story = StoryObj<typeof ChasingLove>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
