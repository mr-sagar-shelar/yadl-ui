import type { Meta, StoryObj } from "@storybook/react";
import PersonalFinance from "../PersonalFinance";

const meta: Meta<typeof PersonalFinance> = { title: "unDraw/PersonalFinance", component: PersonalFinance };

export default meta;
type Story = StoryObj<typeof PersonalFinance>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
