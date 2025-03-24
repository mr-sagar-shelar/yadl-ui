import type { Meta, StoryObj } from "@storybook/react";
import ElastiCache from "../ElastiCache";

const meta: Meta<typeof ElastiCache> = { title: "AWS/Database/ElastiCache", component: ElastiCache };

export default meta;
type Story = StoryObj<typeof ElastiCache>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
