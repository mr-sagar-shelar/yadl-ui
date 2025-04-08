import type { Meta, StoryObj } from "@storybook/react";
import ArcSQLManagedInstance from "../ArcSQLManagedInstance";

const meta: Meta<typeof ArcSQLManagedInstance> = { title: "Azure/Other/ArcSQLManagedInstance", component: ArcSQLManagedInstance };

export default meta;
type Story = StoryObj<typeof ArcSQLManagedInstance>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
