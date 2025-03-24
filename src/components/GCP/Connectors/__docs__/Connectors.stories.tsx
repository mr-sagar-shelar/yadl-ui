import type { Meta, StoryObj } from "@storybook/react";
import Connectors from "../Connectors";

const meta: Meta<typeof Connectors> = { title: "GCP/Connectors", component: Connectors };

export default meta;
type Story = StoryObj<typeof Connectors>;

export const Primary: Story = {
  args: {
    width: "500px",
    height: "500px",
  },
};
