/**
 * @copyright Copyright (c) 2016 Morris Jobke <hey@morrisjobke.de>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

(function() {
	OCA.FilesEditControl = OCA.FilesEditControl || {};

	/**
	 * @class OCA.FilesEditControl.Operation
	 */
	OCA.FilesEditControl.Operation =
		OCA.WorkflowEngine.Operation.extend({
			defaults: {
				'class': 'OCA\\FilesEditControl\\Operation',
				'name': '',
				'checks': [],
				'operation': 'deny'
			}
		});

	/**
	 * @class OCA.FilesEditControl.OperationsCollection
	 *
	 * collection for all configurated operations
	 */
	OCA.FilesEditControl.OperationsCollection =
		OCA.WorkflowEngine.OperationsCollection.extend({
			model: OCA.FilesEditControl.Operation
		});

	/**
	 * @class OCA.FilesEditControl.OperationView
	 *
	 * this creates the view for a single operation
	 */
	OCA.FilesEditControl.OperationView =
		OCA.WorkflowEngine.OperationView.extend({
			model: OCA.FilesEditControl.Operation,
			render: function() {
				var $el = OCA.WorkflowEngine.OperationView.prototype.render.apply(this);
				$el.find('input.operation-operation').addClass('hidden');
			}
		});

	/**
	 * @class OCA.FilesEditControl.OperationsView
	 *
	 * this creates the view for configured operations
	 */
	OCA.FilesEditControl.OperationsView =
		OCA.WorkflowEngine.OperationsView.extend({
			initialize: function() {
				OCA.WorkflowEngine.OperationsView.prototype.initialize.apply(this, [
					'OCA\\FilesEditControl\\Operation'
				]);
			},
			renderOperation: function(operation) {
				var subView = new OCA.FilesEditControl.OperationView({
						model: operation
					});

				OCA.WorkflowEngine.OperationsView.prototype.renderOperation.apply(this, [
					subView
				]);
			}
		});
})();


$(document).ready(function() {
	OC.SystemTags.collection.fetch({
		success: function() {
			new OCA.FilesEditControl.OperationsView({
				el: '#files_editcontrol .rules',
				collection: new OCA.FilesEditControl.OperationsCollection()
			});
		}
	});
});
