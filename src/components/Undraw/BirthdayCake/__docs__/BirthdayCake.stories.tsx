import type { Meta, StoryObj } from "@storybook/react";
import BirthdayCake from "../BirthdayCake";

const meta: Meta<typeof BirthdayCake> = { title: "unDraw/BirthdayCake", component: BirthdayCake };

export default meta;
type Story = StoryObj<typeof BirthdayCake>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
