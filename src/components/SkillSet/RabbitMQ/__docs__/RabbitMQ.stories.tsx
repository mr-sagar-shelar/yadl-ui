import type { Meta, StoryObj } from "@storybook/react";
import RabbitMQ from "../RabbitMQ";

const meta: Meta<typeof RabbitMQ> = { title: "SkillSet/RabbitMQ", component: RabbitMQ };

export default meta;
type Story = StoryObj<typeof RabbitMQ>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
