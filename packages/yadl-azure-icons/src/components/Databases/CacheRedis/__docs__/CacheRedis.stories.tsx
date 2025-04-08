import type { Meta, StoryObj } from "@storybook/react";
import CacheRedis from "../CacheRedis";

const meta: Meta<typeof CacheRedis> = { title: "Azure/Databases/CacheRedis", component: CacheRedis };

export default meta;
type Story = StoryObj<typeof CacheRedis>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
