import type { Meta, StoryObj } from "@storybook/react";
import Kafka from "../Kafka";

const meta: Meta<typeof Kafka> = { title: "SkillSet/Kafka", component: Kafka };

export default meta;
type Story = StoryObj<typeof Kafka>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
