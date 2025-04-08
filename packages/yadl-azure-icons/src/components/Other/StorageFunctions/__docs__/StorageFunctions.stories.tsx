import type { Meta, StoryObj } from "@storybook/react";
import StorageFunctions from "../StorageFunctions";

const meta: Meta<typeof StorageFunctions> = { title: "Azure/Other/StorageFunctions", component: StorageFunctions };

export default meta;
type Story = StoryObj<typeof StorageFunctions>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
