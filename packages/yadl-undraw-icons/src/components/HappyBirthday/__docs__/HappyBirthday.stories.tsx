import type { Meta, StoryObj } from "@storybook/react";
import HappyBirthday from "../HappyBirthday";

const meta: Meta<typeof HappyBirthday> = { title: "unDraw/HappyBirthday", component: HappyBirthday };

export default meta;
type Story = StoryObj<typeof HappyBirthday>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
