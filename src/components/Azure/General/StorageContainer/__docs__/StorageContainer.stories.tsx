import type { Meta, StoryObj } from "@storybook/react";
import StorageContainer from "../StorageContainer";

const meta: Meta<typeof StorageContainer> = { title: "Azure/General/StorageContainer", component: StorageContainer };

export default meta;
type Story = StoryObj<typeof StorageContainer>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
