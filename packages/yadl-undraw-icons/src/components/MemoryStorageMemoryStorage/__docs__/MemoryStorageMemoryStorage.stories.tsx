import type { Meta, StoryObj } from "@storybook/react";
import MemoryStorageMemoryStorage from "../MemoryStorageMemoryStorage";

const meta: Meta<typeof MemoryStorageMemoryStorage> = { title: "unDraw/MemoryStorageMemoryStorage", component: MemoryStorageMemoryStorage };

export default meta;
type Story = StoryObj<typeof MemoryStorageMemoryStorage>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
