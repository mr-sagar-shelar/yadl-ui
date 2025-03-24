import type { Meta, StoryObj } from "@storybook/react";
import EnterEnter from "../EnterEnter";

const meta: Meta<typeof EnterEnter> = { title: "unDraw/EnterEnter", component: EnterEnter };

export default meta;
type Story = StoryObj<typeof EnterEnter>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
