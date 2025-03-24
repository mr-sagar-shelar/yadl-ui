import type { Meta, StoryObj } from "@storybook/react";
import MemoryDBforRedis from "../MemoryDBforRedis";

const meta: Meta<typeof MemoryDBforRedis> = { title: "AWS/Database/MemoryDBforRedis", component: MemoryDBforRedis };

export default meta;
type Story = StoryObj<typeof MemoryDBforRedis>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
