import type { Meta, StoryObj } from "@storybook/react";
import ManagedInstanceApacheCassandra from "../ManagedInstanceApacheCassandra";

const meta: Meta<typeof ManagedInstanceApacheCassandra> = { title: "Azure/Other/ManagedInstanceApacheCassandra", component: ManagedInstanceApacheCassandra };

export default meta;
type Story = StoryObj<typeof ManagedInstanceApacheCassandra>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
