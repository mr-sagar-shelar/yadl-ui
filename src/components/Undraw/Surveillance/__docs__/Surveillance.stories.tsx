import type { Meta, StoryObj } from "@storybook/react";
import Surveillance from "../Surveillance";

const meta: Meta<typeof Surveillance> = { title: "unDraw/Surveillance", component: Surveillance };

export default meta;
type Story = StoryObj<typeof Surveillance>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
