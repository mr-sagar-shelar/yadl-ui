import type { Meta, StoryObj } from "@storybook/react";
import Cassandra from "../Cassandra";

const meta: Meta<typeof Cassandra> = { title: "SkillIcon/Cassandra", component: Cassandra };

export default meta;
type Story = StoryObj<typeof Cassandra>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
