import type { Meta, StoryObj } from "@storybook/react";
import Year2022 from "../Year2022";

const meta: Meta<typeof Year2022> = { title: "unDraw/Year2022", component: Year2022 };

export default meta;
type Story = StoryObj<typeof Year2022>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
