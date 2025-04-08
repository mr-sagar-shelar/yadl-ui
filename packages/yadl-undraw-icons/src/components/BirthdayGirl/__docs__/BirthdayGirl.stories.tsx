import type { Meta, StoryObj } from "@storybook/react";
import BirthdayGirl from "../BirthdayGirl";

const meta: Meta<typeof BirthdayGirl> = { title: "unDraw/BirthdayGirl", component: BirthdayGirl };

export default meta;
type Story = StoryObj<typeof BirthdayGirl>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
