import type { Meta, StoryObj } from "@storybook/react";
import Glue from "../Glue";

const meta: Meta<typeof Glue> = { title: "AWS/Analytics/Glue", component: Glue };

export default meta;
type Story = StoryObj<typeof Glue>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
