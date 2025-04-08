import type { Meta, StoryObj } from "@storybook/react";
import StorSimpleDataManagers from "../StorSimpleDataManagers";

const meta: Meta<typeof StorSimpleDataManagers> = { title: "Azure/Storage/StorSimpleDataManagers", component: StorSimpleDataManagers };

export default meta;
type Story = StoryObj<typeof StorSimpleDataManagers>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
