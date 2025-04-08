import type { Meta, StoryObj } from "@storybook/react";
import ElasticDisasterRecovery from "../ElasticDisasterRecovery";

const meta: Meta<typeof ElasticDisasterRecovery> = { title: "AWS/Storage/ElasticDisasterRecovery", component: ElasticDisasterRecovery };

export default meta;
type Story = StoryObj<typeof ElasticDisasterRecovery>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
