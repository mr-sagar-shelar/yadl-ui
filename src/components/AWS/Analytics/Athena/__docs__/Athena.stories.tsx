import type { Meta, StoryObj } from "@storybook/react";
import Athena from "../Athena";

const meta: Meta<typeof Athena> = { title: "AWS/Analytics/Athena", component: Athena };

export default meta;
type Story = StoryObj<typeof Athena>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
